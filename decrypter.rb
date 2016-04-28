require 'openssl'

iv =
key =
encrypted =

decipher = OpenSSL::Cipher::AES256.new(:CBC)
decipher.decrypt
decipher.key = key.pack('C*')
decipher.iv = iv.pack('C*')
decrypted = decipher.update(encrypted.pack('C*')) + decipher.final

p decrypted.bytes
