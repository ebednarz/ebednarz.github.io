FROM mhart/alpine-node:8.9.1
RUN adduser -D node && \
    mkdir -p        /home/node/app/node_modules && \
    chown node:node /home/node/app/node_modules
USER node
CMD ["/bin/sh", "--login"]
