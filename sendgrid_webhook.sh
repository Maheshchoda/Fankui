function localtunnel {
  lt -s  fankuimahesh --port 2018
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
