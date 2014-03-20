import sys, json
for i in json.loads(sys.stdin.readlines()[0])["Users"]:
  if i["Username"] == sys.argv[1]:
    print i["Fullname"]