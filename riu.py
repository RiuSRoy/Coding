import re



pattern = re.compile(r'/(?P<http_method>[A-Z]+)/(?P<path>[^/]+)')
match = pattern.search("arn:aws:execute-api:ap-south-1:976409993581:o0nuzkllu2/ESTestInvoke-stage/GET/")


if match:
    http_method = match.group('http_method')
else:
    print('No match found')