#Training the ML model

#Importing necessary headerfiles
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
import pickle

#Uploading the dataset
df = pd.read_csv('Synergy-React\\dataset_modified.csv')
print("Dataset Read...")

#Dropping any row with null values
df.dropna(how="any",axis=0,inplace=True)

#Separating the features and target
Xfeatures = df['Clean_Text']
Ylabels = df['Emotion']

#Convert string to float for computation purposes
cv = CountVectorizer()
Xfeatures = cv.fit_transform(Xfeatures)
print("Dataset Preprocessed...")

#Splitting training and testing data
x_train,x_test,y_train,y_test = train_test_split(Xfeatures,Ylabels,test_size=0.2,random_state=42)
print("Train-Test Split Completed...")
 
#Training the SVM Model
svm = SVC(kernel='rbf',C=10,degree=8,coef0=10,gamma='scale')
svm.fit(x_train,y_train)
score = svm.score(x_test,y_test)
print("Model Trained...")

#Download the model
with open('model_pickle','wb') as model:
    pickle.dump(svm,model)
with open('vectorizer_pickle','wb') as vectorizer:
    pickle.dump(cv,vectorizer)
print("Model Dump Done...")