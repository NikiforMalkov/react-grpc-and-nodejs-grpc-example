FROM envoyproxy/envoy-dev:latest
COPY ./envoy.yaml /etc/envoy/envoy.yaml
#CMD /usr/local/bin/envoy -c /etc/envoy.yaml -l debug --service-cluster proxy
CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace --log-path /tmp/envoy_info.log