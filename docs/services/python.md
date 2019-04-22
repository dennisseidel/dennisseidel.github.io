---
id: python
title: DO: Python - Basics
---

Adr- Use Python for ML and NodeJS for everything else: 

[Python Cheatsheet](https://gto76.github.io/python-cheatsheet/)


## Implement Services in Python

### Create virtual env local, activate and deactivate

```text
#http://sourabhbajaj.com/mac-setup/Python/virtualenv.html
virtualenv venv
source venv/bin/activate
deactivate
```

### Install python dependencies:

```python
pip install boto3 google-api-python-client requests
```

### Store a reference to my dependencies:

```python
pip freeze > requirements.txt
```

Optional: Re-install the dependencies from the `requirements.txt`:

```python
pip install -r requirements.txt
```

## Other stuff

Use `Make` for automation in service development https://medium.com/@xobb/help-you-devops-use-make-aebedd33c40f


Use [Google Best Practices](https://github.com/google/styleguide/blob/gh-pages/pyguide.md)

Python Clean Code: 
* https://github.com/zedr/clean-code-python
* http://pythonforengineers.com/writing-great-code/
* https://www.packtpub.com/application-development/clean-code-python
* https://github.com/pluralsight/Clean-Code-The-Polyglot-Edition
* https://docs.python-guide.org/writing/style/

### Object Oriented Programming:

{% embed data="{\"url\":\"https://realpython.com/python3-object-oriented-programming/\",\"type\":\"link\",\"title\":\"Object-Oriented Programming \(OOP\) in Python 3 – Real Python\",\"description\":\"In this article you’ll learn the fundamentals of object-oriented programming \(OOP\) in Python and how to work with classes, objects, and constructors. The tutorial also comes with several OOP exercises to review your learning progress.\",\"icon\":{\"type\":\"icon\",\"url\":\"https://realpython.com/static/favicon.68cbf4197b0c.png\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://files.realpython.com/media/Object-Oriented-Programming-OOP-in-Python-3\_Watermarked.0d29780806d5.jpg\",\"width\":1920,\"height\":1080,\"aspectRatio\":0.5625}}" %}

{% embed data="{\"url\":\"https://www.datacamp.com/community/tutorials/python-oop-tutorial\",\"type\":\"link\",\"title\":\"Object-Oriented Programming in Python\",\"description\":\"Tackle the basics of Object-Oriented Programming \(OOP\) in Python: explore classes, objects, instance methods, attributes and much more with this tutorial!\",\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://s3.amazonaws.com/datacamp-community/social-share-tutorials.jpg\",\"width\":1200,\"height\":628,\"aspectRatio\":0.5233333333333333}}" %}



### Debug with python:

```text
print(variable)
```

* encode json?  `cls=decimalencoder.DecimalEncoder` ?

Overview:

[https://www.fullstackpython.com/table-of-contents.html](https://www.fullstackpython.com/table-of-contents.html)

[https://github.com/mattmakai/fullstackpython.com/pulls](https://github.com/mattmakai/fullstackpython.com/pulls)

Modules: [https://www.tutorialspoint.com/python/python\_modules.htm](https://www.tutorialspoint.com/python/python_modules.htm)





### Switch in Python: 

{% embed data="{\"url\":\"https://www.pydanny.com/why-doesnt-python-have-switch-case.html\",\"type\":\"link\",\"title\":\"pydanny.com\",\"icon\":{\"type\":\"icon\",\"url\":\"http://www.yoursite.com/favicon.ico?v=2\",\"aspectRatio\":0}}" %}



### Testing

{% embed data="{\"url\":\"https://davidallenfox.wordpress.com/2017/06/15/getting-started-with-serverless-framework-and-python-part-2/\",\"type\":\"link\",\"title\":\"Getting started with Serverless Framework and Python \(Part 2\)\",\"description\":\"Radio tower at Stax Museum of American Soul Music This is a continuation of my previous post, which offered some tips for setting up Serverless Framework and concluded with generating a template se…\",\"icon\":{\"type\":\"icon\",\"url\":\"https://s1.wp.com/i/favicon.ico\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://davidallenfox.files.wordpress.com/2017/06/img\_20170322\_141738-e1497459511874.jpg?w=225\",\"width\":225,\"height\":300,\"aspectRatio\":1.3333333333333333}}" %}

Run the unit tests

```python
python -m unittest discover -s tests
```


### [Accessing value inside nested dictionaries](https://stackoverflow.com/questions/10399614/accessing-value-inside-nested-dictionaries)

{% embed data="{\"url\":\"https://stackoverflow.com/a/10399796/1929968\",\"type\":\"link\",\"title\":\"Accessing value inside nested dictionaries\",\"description\":\"I am new to python and need help in solving an issue:  I have a dictionary like   tmpDict = {\'ONE\':{\'TWO\':{\'THREE\':10}}} Do we have any other way to access THREE\'s value other than doing   tmpDict...\",\"icon\":{\"type\":\"icon\",\"url\":\"https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded\",\"width\":316,\"height\":316,\"aspectRatio\":1}}" %}

### [How do I write a function that returns another function?](https://stackoverflow.com/questions/14261474/how-do-i-write-a-function-that-returns-another-function)

{% embed data="{\"url\":\"https://stackoverflow.com/a/14271106/1929968\",\"type\":\"link\",\"title\":\"How do I write a function that returns another function?\",\"description\":\"In Python, I\'d like to write a function make\_cylinder\_volume\(r\) which returns another function. That returned function should be callable with a parameter h, and return the volume of a cylinder with\",\"icon\":{\"type\":\"icon\",\"url\":\"https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded\",\"width\":316,\"height\":316,\"aspectRatio\":1}}" %}

### Lambda Functions

{% embed data="{\"url\":\"https://www.python-kurs.eu/lambda.php\",\"type\":\"link\",\"title\":\"Python-Tutorial: Lambda, filter, reduce und map\",\"description\":\"Einführung in den Lambda-Operator und die Funktionen  map, filter und reduce\",\"icon\":{\"type\":\"icon\",\"url\":\"https://www.python-kurs.eu/favicon.ico\",\"aspectRatio\":0}}" %}



### Check if key exists in \(nested\) dict

{% embed data="{\"url\":\"https://stackoverflow.com/a/43491315/1929968\",\"type\":\"link\",\"title\":\"Elegant way to check if a nested key exists in a python dict\",\"description\":\"Is there are more readable way to check if a key buried in a dict exists without checking each level independently?  Lets say I need to get this value in a object buried \(example taken from Wikidat...\",\"icon\":{\"type\":\"icon\",\"url\":\"https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded\",\"width\":316,\"height\":316,\"aspectRatio\":1}}" %}

### Dependency Injection

{% embed data="{\"url\":\"https://stackoverflow.com/questions/31678827/what-is-a-pythonic-way-for-dependency-injection\",\"type\":\"link\",\"title\":\"What is a Pythonic way for Dependency Injection?\",\"description\":\"Introduction  For Java, Dependency Injection works as pure OOP, i.e. you provide an interface to be implemented and in your framework code accept an instance of a class that implements the defined\",\"icon\":{\"type\":\"icon\",\"url\":\"https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded\",\"width\":316,\"height\":316,\"aspectRatio\":1}}" %}



### String replacement / patterns \(f-strings\)

{% embed data="{\"url\":\"https://stackoverflow.com/a/42834054/1929968\",\"type\":\"link\",\"title\":\"Convert floating point number to a certain precision, and then copy to string\",\"description\":\"I have a floating point number, say 135.12345678910. I want to concatenate that value to a string, but only want 135.123456789. With print, I can easily do this by doing something like:  print \\\"%.9...\",\"icon\":{\"type\":\"icon\",\"url\":\"https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded\",\"width\":316,\"height\":316,\"aspectRatio\":1}}" %}

{% embed data="{\"url\":\"https://cito.github.io/blog/f-strings/\",\"type\":\"link\",\"title\":\"The new f-strings in Python 3.6 \| Seasoned & Agile\",\"description\":\"Python 3.6 is out and provides formatted string literals.\",\"icon\":{\"type\":\"icon\",\"url\":\"https://cito.github.io/img/favicon96.png\",\"width\":96,\"height\":96,\"aspectRatio\":1}}" %}

Check if key is in \(nested\) dictonary: 

* you always can create a function for it 

else: 

{% embed data="{\"url\":\"http://thispointer.com/python-how-to-check-if-a-key-exists-in-dictionary/\",\"type\":\"link\",\"title\":\"Python : How to check if a key exists in dictionary ? – thispointer.com\",\"icon\":{\"type\":\"icon\",\"url\":\"http://thispointer.com/favicon.ico\",\"aspectRatio\":0}}" %}

{% embed data="{\"url\":\"https://stackoverflow.com/a/25833661/1929968\",\"type\":\"link\",\"title\":\"Python safe method to get value of nested dictionary\",\"description\":\"I have a nested dictionary. Is there only one way to get values out safely?  try:     example\_dict\[\'key1\'\]\[\'key2\'\] except KeyError:     pass Or maybe python has a method like get\(\) for nested dict...\",\"icon\":{\"type\":\"icon\",\"url\":\"https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded\",\"width\":316,\"height\":316,\"aspectRatio\":1}}" %}


### Questions

* [Check if a file or directory exists](https://stackabuse.com/python-check-if-a-file-or-directory-exists/)
* Run commandline commands from python: [subprocess](https://codecalamity.com/run-subprocess-run/)
* How to run commands with pipes in python either use os.system or [subprocess](https://security.openstack.org/guidelines/dg_avoid-shell-true.html)
* [Logging](https://fangpenlin.com/posts/2012/08/26/good-logging-practice-in-python/), [2](https://docs.python-guide.org/writing/logging/)
* [How do I abort the execution of a Python script?](https://stackoverflow.com/questions/179369/how-do-i-abort-the-execution-of-a-python-script)
* [Vendorizing & Structuring Code](https://docs.python-guide.org/writing/structure/#vendorizing-dependencies) [vendoring](https://medium.com/underdog-io-engineering/vendoring-python-dependencies-with-pip-b9eb6078b9c0)
* [Default Arguments in Python](http://blog.thedigitalcatonline.com/blog/2015/02/11/default-arguments-in-python/)
* [f-strings / Template Strings](https://cito.github.io/blog/f-strings/)
* [How to extract a substring from inside a string in Python?](https://stackoverflow.com/questions/4666973/how-to-extract-a-substring-from-inside-a-string-in-python)




## Python unit testing : 

{% embed data="{\"url\":\"http://docs.python-guide.org/en/latest/writing/tests/\",\"type\":\"link\",\"title\":\"Testing Your Code — The Hitchhiker\'s Guide to Python\",\"icon\":{\"type\":\"icon\",\"url\":\"http://docs.python-guide.org/favicon.ico\",\"aspectRatio\":0}}" %}

{% embed data="{\"url\":\"https://www.youtube.com/watch?v=6tNS--WetLI\",\"type\":\"video\",\"title\":\"Python Tutorial: Unit Testing Your Code with the unittest Module\",\"description\":\"In this Python Programming Tutorial, we will be learning how to unit-test our code using the unittest module. Unit testing will allow you to be more comfortable with refactoring and knowing whether or not your updates broke any of your existing code. Unit testing is a must on any large projects and is used by all major companies. Not only that, but it will greatly improve your personal code as well. Let\'s get started.\\n\\nThe code from this video can be found at:\\nhttps://github.com/CoreyMSchafer/code\_snippets/tree/master/Python-Unit-Testing\\n\\nUnittest assert methods:\\n https://docs.python.org/3/library/unittest.html\#unittest.TestCase.debug\\nif \_\_name\_\_ == \'\_\_main\_\_\' video: https://www.youtube.com/watch?v=sugvnHA7ElY\\nOOP Series: https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc\\n\\n\\nIf you enjoy these videos and would like to support my channel, I would greatly appreciate any assistance through my Patreon account:\\nhttps://www.patreon.com/coreyms\\n\\nOr a one-time contribution through PayPal:\\nhttps://goo.gl/649HFY\\n\\nIf you would like to see additional ways in which you can support the channel, you can check out my support page:\\nhttp://coreyms.com/support/\\n\\nYou can find me on:\\nMy website - http://coreyms.com/\\nFacebook - https://www.facebook.com/CoreyMSchafer\\nTwitter - https://twitter.com/CoreyMSchafer\\nGoogle Plus - https://plus.google.com/+CoreySchafer44/posts\\nTumblr - https://www.tumblr.com/blog/mycms\",\"icon\":{\"type\":\"icon\",\"url\":\"https://www.youtube.com/yts/img/favicon\_144-vfliLAfaB.png\",\"width\":144,\"height\":144,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://i.ytimg.com/vi/6tNS--WetLI/maxresdefault.jpg\",\"width\":1280,\"height\":720,\"aspectRatio\":0.5625},\"embed\":{\"type\":\"player\",\"url\":\"https://www.youtube.com/embed/6tNS--WetLI?rel=0&showinfo=0\",\"html\":\"<div style=\\\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.2493%;\\\"><iframe src=\\\"https://www.youtube.com/embed/6tNS--WetLI?rel=0&amp;showinfo=0\\\" style=\\\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;\\\" allowfullscreen scrolling=\\\"no\\\"></iframe></div>\",\"aspectRatio\":1.7778}}" %}


### Testing Tools: 

{% embed data="{\"url\":\"https://nose.readthedocs.io/en/latest/\",\"type\":\"link\",\"title\":\"Note to Users — nose 1.3.7 documentation\",\"icon\":{\"type\":\"icon\",\"url\":\"https://nose.readthedocs.io/favicon.ico\",\"aspectRatio\":0}}" %}

### Dialogflow + Lambda Integration / Dialogflow Webhook Fulfillment:

{% embed data="{\"url\":\"https://www.raizlabs.com/dev/2017/01/build-ai-assistant-api-ai-amazon-lambda/\",\"type\":\"link\",\"title\":\"Tutorial: Build an AI Assistant with API.ai and Amazon Lambda - RaizException - Raizlabs Developer Blog\",\"description\":\"In this tutorial, we demonstrate how to create a conversational ai assistant that connect to third-party APIs using api.ai and Amazon Lambda functions.\",\"icon\":{\"type\":\"icon\",\"url\":\"https://raizlabscom-wpengine.netdna-ssl.com/dev/wp-content/themes/raizlabs/apple-touch-icon-144x144.png\",\"width\":144,\"height\":144,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://raizlabs.wpengine.com/dev/wp-content/uploads/sites/10/2017/12/ai\_assistant.jpg\",\"width\":2000,\"height\":675,\"aspectRatio\":0.3375}}" %}

{% embed data="{\"url\":\"https://chatbotsmagazine.com/creating-nodejs-webhook-for-dialogflow-2b050f76cd75\",\"type\":\"link\",\"title\":\"Creating NodeJS Webhook for Dialogflow\",\"description\":\"Creating a chatbot which provides information like movie details, news, flight details, weather information requires some external Api’s…\",\"icon\":{\"type\":\"icon\",\"url\":\"https://cdn-images-1.medium.com/fit/c/304/304/1\*21YIHiEOUohoIT7\_9Khrig.png\",\"width\":152,\"height\":152,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://cdn-images-1.medium.com/max/1200/1\*yBvwPGwkNZQSwx4ZP3U4bQ.jpeg\",\"width\":1024,\"height\":678,\"aspectRatio\":0.662109375}}" %}

{% embed data="{\"url\":\"https://dialogflow.com/docs/fulfillment\",\"type\":\"link\",\"title\":\"Fulfillment  \|  Dialogflow\",\"icon\":{\"type\":\"icon\",\"url\":\"https://dialogflow.com/\_static/558bc0d91d/images/touch-icon.png\",\"aspectRatio\":0}}" %}

{% embed data="{\"url\":\"https://medium.com/@pallavtrivedi03/how-to-make-a-webhook-for-dialogflow-fulfillment-d02835cc50bf\",\"type\":\"link\",\"title\":\"How to make a Webhook for Dialogflow Fulfillment\",\"description\":\"This is the last part of a three part tutorial series “Building a Chat Bot having AI is Easy”. In the previous parts, we trained &…\",\"icon\":{\"type\":\"icon\",\"url\":\"https://cdn-images-1.medium.com/fit/c/304/304/1\*8I-HPL0bfoIzGied-dzOvA.png\",\"width\":152,\"height\":152,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://cdn-images-1.medium.com/max/1200/0\*Vn6jDsmM4oo6mbql.\",\"width\":1200,\"height\":800,\"aspectRatio\":0.6666666666666666}}" %}

{% embed data="{\"url\":\"https://developers.google.com/actions/reference/v1/dialogflow-webhook\",\"type\":\"link\",\"title\":\"Dialogflow Webhook Format  \|  Actions on Google        \|  Google Developers\",\"icon\":{\"type\":\"icon\",\"url\":\"https://developers.google.com/\_static/18d5b9201b/images/touch-icon.png\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://developers.google.com/\_static/18d5b9201b/images/share/devsite-google-blue.png\",\"width\":1200,\"height\":630,\"aspectRatio\":0.525}}" %}

### Integrated Use case:

{% embed data="{\"url\":\"https://cloud.google.com/solutions/smartening-up-support-tickets-with-serverless-ml\",\"type\":\"link\",\"title\":\"Smartening Up Support Tickets with Serverless Machine Learning: Tutorial  \|  Solutions        \|  Google Cloud\",\"icon\":{\"type\":\"icon\",\"url\":\"https://cloud.google.com/\_static/18d5b9201b/images/cloud/icons/favicons/onecloud/apple-icon.png\",\"aspectRatio\":0}}" %}

* Multi Cloud Architectures: [https://cloud.google.com/solutions/architecture/global-data-distribution](https://cloud.google.com/solutions/architecture/global-data-distribution)

Data architecture on GCP:

{% embed data="{\"url\":\"https://cloud.google.com/solutions/data-lifecycle-cloud-platform\",\"type\":\"link\",\"title\":\"Data Lifecycle on Google Cloud Platform  \|  Solutions        \|  Google Cloud\",\"icon\":{\"type\":\"icon\",\"url\":\"https://cloud.google.com/\_static/18d5b9201b/images/cloud/icons/favicons/onecloud/apple-icon.png\",\"aspectRatio\":0}}" %}
