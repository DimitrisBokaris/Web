import requests,re
while True:
    s=str(input("Type surname:"))
    s={'surname':s}
    p=requests.post(url='http://ds.upatras.gr/index.php',data=s)
    text=str(p.text)
    ##            print(p.text)
    email=str(re.findall(r'<[\w.-]+>[\w.-]+@[\w.-]+', text))
    print("Email:",email[5:-2])
    telephone=re.findall(r'[+]+[1234567890]+[1234567890]', text)
    a=""
    for i in telephone[1:]:
        a=a+","+i
    print("Tel:",telephone[0]+a)
    names=re.findall(r'[\w.-]+>[\w.-]+[ ]+[\w.-]+<', text)
    print(names[2:])
           

        
                
            
            
