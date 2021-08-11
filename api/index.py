from fastapi import FastAPI
import aiofiles
import random
import os
from fastapi.responses import StreamingResponse
from pathlib import Path

app = FastAPI(title="龙图 API",docs_url="/",openapi_url='/api/openapi.json',redoc_url=None)

@app.get("/api/get")
async def get():
    path = len(Path(__file__).name)
    path = __file__[:-path]+"image/"
    flist = os.listdir(path)
    file = random.choice(flist)
    def iterfile(path):  # (1)
        with open(path, mode="rb") as file_like:  # (2)
            yield from file_like  # (3)

    return StreamingResponse(iterfile(path+file), media_type="image")