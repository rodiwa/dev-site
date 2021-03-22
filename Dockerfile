FROM nginx:1.18.0-alpine
COPY . /usr/share/nginx/html

# bind to herokus dynamic PORT
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
