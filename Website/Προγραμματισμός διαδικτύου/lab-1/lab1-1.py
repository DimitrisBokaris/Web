import requests
while True:
        try:
                x=str(input("Type URL:"))
                x=requests.get(x)
                print("\nPage headers:",x.headers)
                try:print("\nServer software:",x.headers['Server'],"\n")
                except:print("\nServer information could not be obtained.\n")
                try:print("Page cookies:",x.headers['Set-Cookie'])
                except:print("Cookie information could not be obtained.")
        except:print("An error occured, retype URL")
        

        
 
