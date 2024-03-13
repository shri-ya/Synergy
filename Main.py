#Using the ML model
#Import necessary header files
from sklearn.feature_extraction.text import CountVectorizer
import pickle
import Flask

app = Flask(__name__)

@app.route("/predict-emotion")
#Preprocessing the input
def predict():
    #Get the user input
    userFeeling = input("How are you feeling today?\n")
    inputList = []
    inputList.append(userFeeling)
    with open('vectorizer_pickle','rb') as vectorizer:
        cv = pickle.load(vectorizer)
    myvect = cv.transform(inputList).toarray()
    with open('model_pickle','rb') as model:
        mp = pickle.load(model)
    prediction = mp.predict(myvect)
    return {"Result":[prediction[0]]}

if __name__ == "__main__":
    app.run(debug=True) 