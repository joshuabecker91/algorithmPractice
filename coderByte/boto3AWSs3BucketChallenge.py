import requests
import boto3

# from the suggested article/resource
from botocore import UNSIGNED
from botocore.client import Config


file_array = []

# s3 = boto3.client("s3", aws_access_key_id=ACCESS_KEY, aws_secret_access_key=SECRET_KEY) # if key required
s3 = boto3.client('s3', config=Config(signature_version=UNSIGNED)) # public s3
bucket_name = 'coderbytechallengesandbox'
response = s3.list_objects_v2(Bucket=bucket_name)
files = response.get('Contents')
print(files)
for file in files:
    print(f"file_name: {file['Key']}, size: {file['Size']}")
    file_name = {file['Key']}
    print(file_name)
    # if file_name[0:5] == '__cb__':
    file_array.append(file_name)
    
    # data = s3.get_object(Bucket=bucket_name, Key=file_name)
    # print(data)
    # for line in data['Body'].iter_lines(): 
    #   print(line)

print("this is the file array", file_array)

test = s3.get_object(Bucket=bucket_name, Key='__cb__file-name-s3-empty.txt')
print(test)
output = test['Body'].read()
print(output)
output2 = output.decode()
print(output2)

print("direct call to get object above")

for file in file_array:
    data = s3.get_object(Bucket=bucket_name, Key=file)
    print(data)
    print(data['Body'].read())
    print("call in loop test")
    # text = s3.Object(bucket_name, file).get()['Body'].read().decode('utf-8')
    # print(text)
    # with open(text) as sample: 
    #   for line in sample: 
    #     print(line.rstrip())

print("-----get file contents------")


# RAN OUT OF TIME WHILE WORKING ON OUTPUTTING THE INFO AND MATCHING ALL FILES IN LOOP WITH EXACT PREFIX
# HOWEVER I ACHIEVED ACCESSING FILE CONTENTS


# # body = file['Body']
# # print(body.read())

# body = s3_object['Body']
# key = file.key
# body = file.get()['Body'].read()

# s3_object = s3.get_object(Bucket=bucket_name, Key={file['Key']})



# def get_contents(s3):
# conn = boto3.connect_s3()
# bucket = conn.get_bucket('coderbytechallengesandbox')
# for key in bucket.list():
#     print(key.name.encode('utf-8'))
# print(bucket)

# conn = S3Connection('access-key','secret-access-key')

# Print out bucket names
# for bucket in s3:
#     print(bucket.name)

# Download file and read from disc
# s3.Bucket('coderbytechallengesandbox').download_file(Key='foo.csv', Filename='foo2.csv')
# pd.read_csv('foo2.csv', index_col=0)



# for obj in s3.Bucket('coderbytechallengesandbox').objects.all():
#     print(obj)



# "__cb__"

# get_contents(s3)

# coderbytechallengesandbox
# s3 = boto3.client('s3')







# Packages installed
# ------------------
# boto3
# numpy
# pandas
# pyspark
# pytest
# requests
# scikit-learn
# scipy
# tensorflow