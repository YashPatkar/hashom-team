from openai import OpenAI
client = OpenAI(base_url="https://build.nvidia.com/v1/chat/completions", api_key="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")

messages = [
    {"role": "system", "content": "You are a helpful assistant"},
    {"role": "user", "content": "Who won the world series in 2020?"}
]

chat_response = client.chat.completions.create(
    model="meta/llama-3.1-8b-instruct",
    messages=messages,
    max_tokens=50,
    stream=False
)
assistant_message = chat_response.choices[0].message
print(assistant_message)