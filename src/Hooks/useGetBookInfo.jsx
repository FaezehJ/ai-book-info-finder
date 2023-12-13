import { useState } from "react";

// 1. Set ups a connection with OpenAI
// 2. It will create State: Data, isLoading, and Errors for handling
// all info related to an API call
// 3. It will create a function (callback) that is returned from this
// hook alongside our three states that takes in a prompt, calls
// openAI for related info, and sets my state accordingly

export default function useGetBookInfo() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Create a callback that has state-management built in
  // that will call OpenAI's api

  const fetchInfo = async (prompt) => {
  
    console.log(prompt)
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
          method: "POST",
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  "You are a librarian that has access to all existing information about every book that has been published. Based on user input, fetch a detailed list of resources about the given book title.",
              },
              {
                role: "user",
                content: prompt,
              },
            ],
          }),
        }
      );
      console.log(response)
      const data = await response.json();
      console.log(data.choices[0].message.content)
      setData(data.choices[0].message.content);}

     catch (e) {setError(e);} 
      finally {
      setIsLoading(false);
    }
  };

  return {data, isLoading, error, fetchInfo};


}
