export AZURE_STORAGE_ACCOUNT="abethel"
export AZURE_STORAGE_ACCESS_KEY="kL8zlH5FX06iBtYaOrVUhx+7+j1a4XMyjiQCilOwEaCK0rwrbcLRWn6IqstUQHobNyX6Rc4tSGRbpXeRYQdHpA=="

export container_name="abethel"
export blob_name="resume"
export image_to_upload="./andrew_resume.pdf"
export destination_folder="./"

echo "Creating the container..."
azure storage container create $container_name

echo "Uploading the image..."
azure storage blob upload $image_to_upload $container_name $blob_name

echo "Listing the blobs..."
azure storage blob list $container_name

echo "Downloading the image..."
azure storage blob download $container_name $blob_name $destination_folder

echo "Done"
