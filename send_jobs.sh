#!/bin/bash

let repeats=1

if [[ "$1" =~ ^[0-9]+$ ]] && [ "$1" -gt "1" ]; then
  repeats=$1
fi

for i in `seq 1 $repeats`
do
  node compiled/client.js
  echo ""
done
