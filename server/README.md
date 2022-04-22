

* Server running on 
```

```


* Mongo-express for admin database

```
http://localhost:8081
```

* Generate proto files from root directory
```
protoc --plugin=protoc-gen-ts=Server\\node_modules\\.bin\\protoc-gen-ts.cmd --plugin=protoc-gen-grpc=Server\\node_modules\\.bin\\grpc_tools_node_protoc_plugin.cmd --js_out=import_style=commonjs,binary:./Server/src/proto --ts_out=./Server/src/proto --grpc_out=./Server/src/proto  -I ./proto/entity ./proto/entity/*.proto
```
* Genereate proto files from server directory
```
protoc --plugin=protoc-gen-ts=node_modules\\.bin\\protoc-gen-ts.cmd --plugin=protoc-gen-grpc=node_modules\\.bin\\grpc_tools_node_protoc_plugin.cmd --js_out=import_style=commonjs,binary:./src/proto --ts_out=./src/proto --grpc_out=./src/proto  -I ../proto/entity ../proto/entity/*.proto
```

* Proxy 

if you don't want to use docker and envoy on windows then you can use grpcwebproxy, you can download it from here
```
https://github.com/improbable-eng/grpc-web/releases
```

Example to run proxy on windows
```
grpcwebproxy-v0.15.0-win64.exe  --backend_addr=localhost:9090 --backend_tls_noverify --run_tls_server=false --allow_all_origins
```

Example to run proxy on linux
```
TODO
```