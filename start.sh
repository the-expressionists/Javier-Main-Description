#!/bin/bash
echo "Start mongodb (linux only)? [y/n]: " 
read input
if [ "$input" == "y" ]
then
npm run mongodo
fi
npm run node