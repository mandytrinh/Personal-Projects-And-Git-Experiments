# This removes all meta content (author, title of book, timestamp etc) for Kindle highlighted passages (file is called "My Clippings" in Kindle)
# Takes in a .txt file, parses out everything between the delimiter ==== and the final AM or PM marker, and saves the result to a new output txt file.

import re

with open('Input.txt', 'r') as inputFile, open("Output.txt", "w") as output:
  textString = inputFile.read()
  pattern = re.compile(r"(\=$(?s)([^=]*)(PM|AM))", re.MULTILINE)
  
  result= pattern.sub("", textString)

  output.write(result)
  print(result)
  
  # Reference for regex syntax:
  # \= exactly the "=" marker
  # $ end of sentence
  # ?s  turns on the dotall modifier to match newline characters.
  # [^=]* All except the = itself
  # PM|AM ending with PM or AM
  # Don't mind the below; kept these just for future references
  #arrayResult = pattern.findall(textString)
  #print(arrayResult)
  #result = "\n".join(str(elem) for elem in arrayResult)
  
