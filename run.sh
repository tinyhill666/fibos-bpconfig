nohup fibos bp.js > log 2>&1 &
echo $! > fibos.pid
tail -f log