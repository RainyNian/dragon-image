from fastapi import FastAPI
import aiofiles
import random
import os
from fastapi.responses import FileResponse
from pathlib import Path

app = FastAPI(title="龙图 API",docs_url="/",openapi_url='/api/openapi.json',redoc_url=None)

@app.get("/api/get")
async def get():
    path = len(Path(__file__).name)
    path = __file__[:-path]+"image/"
    flist = os.listdir(path)
    file = random.choice(flist)
    async with aiofiles.open(path+file, "rb") as f:
        return FileResponse(path+file)