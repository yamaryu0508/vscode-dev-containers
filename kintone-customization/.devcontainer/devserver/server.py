#!/usr/bin/env python3

from http.server import HTTPServer,SimpleHTTPRequestHandler
from socketserver import BaseServer
import ssl

PORT = 8443
HOST = '0.0.0.0'
DIRECTORY = 'static'

CERTFILE = '.devcontainer/devserver/mkcert/localhost+2.pem'
KEYFILE = '.devcontainer/devserver/mkcert/localhost+2-key.pem'

class SilentServerHandler(SimpleHTTPRequestHandler):
  #def __init__(self, *args, **kwargs):
  #  super().__init__(*args, directory=DIRECTORY, **kwargs)
  def log_message(self, format, *args):
    pass

print('[log] Dev server started')
try:
  httpd = HTTPServer((HOST, PORT), SilentServerHandler)
  httpd.socket = ssl.wrap_socket (httpd.socket, certfile=CERTFILE, keyfile=KEYFILE, server_side=True)
  httpd.serve_forever()
except Exception as e:
  print(e.message)
  print('[log] Dev server stopped')
