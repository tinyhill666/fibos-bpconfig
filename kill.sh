#!/bin/bash
if [ -f $PWD"/fibos.pid" ]; then
    pid=`cat $PWD"/fibos.pid"`
    echo $pid
    kill -2 $pid
    rm -r $PWD"/fibos.pid"

    echo -ne "\n Stoping fibos \n"
        while true; do
                [ ! -d "/proc/$pid/fd" ] && break
                echo -ne "."
                sleep 1
        done
        echo -ne "\n fibos Stopped. \n"
fi
