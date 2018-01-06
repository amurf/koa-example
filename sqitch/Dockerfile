FROM perl:latest

RUN cpanm App::Sqitch DBD::Pg

WORKDIR /sqitch
ADD . /sqitch
