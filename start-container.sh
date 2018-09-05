source set-env.sh

docker rm -f $container_name

docker run --name $container_name \
    -v $pwd:/fibos \
    -p $http_port:8888 -p $p2p_port:9876 \
    $docker_tag fibos run.js