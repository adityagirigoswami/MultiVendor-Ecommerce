# Stage 1: build with dependencies
FROM python:3.10-slim AS builder

WORKDIR /app

RUN apt update && apt install -y gcc libpq-dev build-essential

COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --user -r requirements.txt

# Stage 2: slim runtime
FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PATH="/root/.local/bin:$PATH"

WORKDIR /app

# install runtime dependencies
RUN apt update && apt install -y libpq-dev

COPY --from=builder /root/.local /root/.local
COPY . .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
