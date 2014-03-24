import sys, json
userlist=json.loads(sys.stdin.readlines()[0])["Users"]
print "{0}".format("\n".join(i["Username"] for i in userlist))
