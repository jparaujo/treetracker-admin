npm run build
tar -cvzf build.tar.gz build
scp build.tar.gz root@138.68.194.18:
ssh -t root@138.68.194.18 'tar -xvzf build.tar.gz; rm -Rf /var/www/html; mv build /var/www/html'
