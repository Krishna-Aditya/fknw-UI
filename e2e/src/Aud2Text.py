from app import app
import speech_recognition as sr
from flask import Flask

app = Flask(__name__)

@app.route('/')
@app.route('/main')
def main():
    sound="C:/Users/dell/Downloads/NY045.wav"
    r=sr.Recognizer()
    
    with sr.AudioFile(sound) as source:
        r.adjust_for_ambient_noise(source)
        
        print("Converting Audio File to text....")
        audio=r.listen(source)
        
        try:
            print("Converted Audio is : \n" +r.recognize_sphinx(audio))
            
        except Exception as e:
            print(e)

if __name__=="__main__":
    main()