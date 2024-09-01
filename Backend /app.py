# app.py
from flask import Flask, request, jsonify
from PIL import Image
import pytesseract
from transformers import pipeline

app = Flask(__name__)

summarizer = pipeline('summarization')

@app.route('/convert', methods=['POST'])
def convert_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']

    if file.content_type.startswith('image/'):
        image = Image.open(file)
        extracted_text = pytesseract.image_to_string(image)
        summary = summarizer(extracted_text, max_length=150, min_length=50, do_sample=False)
        return jsonify({"notes": summary[0]['summary_text']})

    elif file.content_type.startswith('video/'):
        return jsonify({"notes": "Video processing is not yet implemented."})

    return jsonify({"error": "Unsupported file type"}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)
