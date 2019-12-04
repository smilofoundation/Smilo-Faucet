server {
        listen   443;
        server_name faucet.smilo.foundation;

        root /usr/share/nginx/www;
        index index.html index.htm;

        ssl on;
        ssl_certificate /etc/ssl/smilofoundation.pem;
        ssl_certificate_key /etc/ssl/smilofoundation.key;
	location / {
        	proxy_pass         "http://127.0.0.1:3000";
	}


}

mv /etc/nginx/sites-enabled/faucet.smilo.foundation /etc/nginx/sites-available/faucet.smilo.foundation
