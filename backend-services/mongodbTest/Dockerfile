FROM golang as builder

ENV GO111MODULE=on

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main .

FROM alpine

#RUN adduser -S -D -H -h /app appuser
#USER appuser

COPY --from=builder /app/main /app/
WORKDIR /app
#CMD ["./main"]

EXPOSE 8080
ENTRYPOINT ["/app/main"]
