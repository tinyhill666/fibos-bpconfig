FROM ubuntu:16.04
MAINTAINER fibosrocks
RUN apt-get update && apt-get install -y curl sudo && rm -rf /var/lib/apt/lists/*
RUN curl -s  https://fibos.io/download/installer.sh | sh
WORKDIR /fibos
EXPOSE 9876
EXPOSE 8888
