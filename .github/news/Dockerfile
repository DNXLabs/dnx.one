FROM python:slim
COPY . /app
WORKDIR /app

RUN pip install -r requirements.txt
CMD ["/bin/bash", "-c", "while :; do sleep 10; done"]