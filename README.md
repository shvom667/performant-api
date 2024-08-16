# performant-api
## Run two servers side by side and test them using wrk

### Counter
- node counter.js
- wrk -t1 -c400 -d30s http://localhost:8000/

### Simple
- node simple.js
- wrk -t1 -c400 -d30s http://localhost:8001/

