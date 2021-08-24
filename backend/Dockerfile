FROM php:8.0-alpine3.14

# Properly Installing Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN HASH="$(wget -q -O - https://composer.github.io/installer.sig)"
# RUN php -r "if (hash_file('SHA384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"

RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
RUN php -r "unlink('composer-setup.php');"
RUN chmod +x /usr/local/bin/composer
RUN /bin/dd if=/dev/zero of=/var/swap.1 bs=1M count=1024
#Composer Installation Ends

# RUN addgroup api && adduser -S  -G api api
# USER api

WORKDIR /api

COPY composer.json ./

RUN composer install

COPY . .

RUN mkdir -p public/avatars
RUN mkdir -p public/bookimages
RUN mkdir -p public/orders

EXPOSE 8000

CMD ["php", "-S", "localhost:8000", "-t", "public"]
