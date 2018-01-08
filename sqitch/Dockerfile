FROM perl:latest

WORKDIR /sqitch

RUN apt-get update \
 && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
        postgresql-client \
 && ln -sf /usr/share/zoneinfo/Australia/Melbourne /etc/localtime \
 && echo "Australia/Melbourne" > /etc/timezone \
 && dpkg-reconfigure -f noninteractive tzdata

RUN cpanm -nf App::Sqitch DBD::Pg

ADD . /sqitch

ENTRYPOINT ["/sqitch/docker/entrypoint.sh"]
