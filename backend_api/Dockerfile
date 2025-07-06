########################
# Stage 1 ── Builder   #
########################
FROM python:3.10-slim AS builder

# Install build tools only in builder layer
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        gcc \
        build-essential \
        libpq-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy requirements and install to /install (isolated path)
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --prefix=/install -r requirements.txt

########################
# Stage 2 ── Runtime   #
########################
FROM python:3.10-slim

# Create non‑root user
RUN useradd --create-home appuser
WORKDIR /app
USER appuser

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PATH="/home/appuser/.local/bin:$PATH"

# Copy Python deps from builder layer
COPY --from=builder /install /home/appuser/.local

# Copy project source (only necessary files)
COPY --chown=appuser:appuser . .

########################
# Stage 3 ── Command   #
########################
# Collect static (if Django) — safe to ignore if not used
# RUN python manage.py collectstatic --noinput

# Expose port for Gunicorn (default 8000)
EXPOSE 8000

# Start Gunicorn with 3 workers — adjust as needed
CMD ["gunicorn", "backend_api.wsgi:application", "-b", "0.0.0.0:8000", "-w", "3", "--threads", "3"]
