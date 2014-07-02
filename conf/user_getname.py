import sys, json
for i in json.loads(sys.stdin.readlines()[0])["users"]:
  if i["username"] == sys.argv[1]:
    print i["fullname"]
