# PowerShell script to read a CSV file and create markdown files with front matter for each row

# Define input and output paths
$csvPath = "C:\Users\luke8\Desktop\temp\users.csv"  # Replace with your CSV file path
$outputFolder = "C:\Users\luke8\Desktop\temp\"  # Folder where markdown files will be saved

# Create output folder if it doesn't exist
if (-not (Test-Path $outputFolder)) {
    New-Item -ItemType Directory -Path $outputFolder
}

# Read the CSV file
$csvData = Import-Csv -Path $csvPath

# Iterate through each row in the CSV
foreach ($row in $csvData) {
    # Create a file name based on the 'name' column, sanitized for file system
    $fileName = "$($row.name).md" -replace '[^\w\-\.]', '_'
    $filePath = Join-Path -Path $outputFolder -ChildPath $fileName

    # Create markdown content with front matter
    $markdownContent = "---`n"
    $markdownContent += "name: $($row.name)`n"
    $markdownContent += "title: $($row.title)`n"
    $markdownContent += "email: $($row.email)`n"
    $markdownContent += "title2: $($row.title2)`n"
    $markdownContent += "mda: $($row.mda)`n"
    $markdownContent += "---`n"

    # Write to markdown file
    $markdownContent | Out-File -FilePath $filePath -Encoding UTF8
}

Write-Host "Markdown files have been generated in the $outputFolder folder."