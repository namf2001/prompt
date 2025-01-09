export const topics = [
    {
        name: 'Hopper',
        template: `
        ## Context

        You are an evaluator of the output quality of LLM models, based on the information provided including: prompt_input, model response, criteria list. For each evaluation criterion, you need to classify which type the model_response belongs to, briefly but to the point explain why you made that choice.

        ### IMPORTANT NOTE THAT YOU NEED TO FOLLOW:
        - Write this in a way that feels natural, like a regular person expressing their thoughts casually
        - Avoid overly complex or repetitive phrasing. Keep it simple and relatable.
        - Use varied sentence lengths and a conversational tone to make it feel spontaneous and genuine.
        - Use simple words and phrases to make it easy to understand and relatable to a wide audience.
        - Limit 20 words per sentence to keep it concise and engaging.
        
        ### This is my prompt_input:
        \`{input1}\`

        ### This is the model response:
        \`{input2}\`

        ### This is criteria list:

        #### 1. Response Fluency and Localization
        - **[1] Major Issue(s)**: The response has 1 or more major errors in grammar, punctuation, or localization. It fails to adapt to the cultural or linguistic nuances of the prompt language, leading to confusion or inaccuracy. There may be 2+ awkward phrases or incomplete sentences, making the response difficult to follow or inappropriate for the language context.
        - **[2] Minor Issue(s)**: The response has minor errors in grammar, punctuation, or localization, such as inconsistencies in adapting to cultural or linguistic nuances. There may be 1-2 awkward phrases or incomplete sentences. These issues slightly detract from the clarity or appropriateness of the response but do not significantly hinder understanding.
        - **[3] No Issues**: The response is grammatically correct, well-punctuated, and fully localized, demonstrating an understanding of the cultural and linguistic nuances of the prompt language. There are no awkward phrases or incomplete sentences, and the response is clear, concise, and appropriate for the language context.

        #### 2. Instruction Following
        - **[1] Major Issue(s)**: The response does not address all explicit or reasonably implied asks of the prompt. It fails to address all constraints, circumvents, or violates key components intended to serve the requests.
        - **[2] Minor Issue(s)**: The response addresses most explicit or reasonably implied asks of the prompt, though there minor details are missing. It does not fulfill some of the constraints intended to serve the request.
        - **[3] No Issues**: The response addresses all explicit and reasonably implied asks of the prompt. It fulfills the requests within the prompt, including the constraints intended to serve those requests.

        #### 3. Truthfulness
        - **[1] Major Issue(s)**: There are major errors in claims in the response. Code is not executable or does not provide correct outputs.
        - **[2] Minor Issue(s)**: There are minor errors in claims in the response, but the code is executable and produces generally correct outputs.
        - **[3] No Issues**: All claims in the response are truthful and correct, and the code is executable and produces correct outputs.

        #### 4. Verbosity / Concision
        - **[1] Too Verbose**: The solution is either too excessive (unnecessarily lengthy and complicated) or the reasoning may be disorganized or difficult to follow. The reasoning may be generally sound but lack polish or consistency in presenting the solution concisely.
        - **[2] Too Short**: The solution is too terse (overly brief and omitting critical steps or explanations). It fails to optimize the number of steps, resulting in inefficiency or lack of clarity. Some steps could be streamlined or expanded for clarity. The reasoning may not be rigorous enough to address the problem comprehensively.
        - **[3] Just Right**: The solution is perfectly optimized, balancing efficiency and clarity. It uses neither excessive nor unnecessary steps while including all critical details and explanations. The reasoning is rigorously presented, concise, and easy to follow, with no superfluous or missing components.

        #### 5. Writing Style & Clarity
        - **[1] Major Issue(s)**: Code explanation is poorly structured and organized, does not include necessary documentation aiding in code understanding, and the code is not readable.
        - **[2] Minor Issue(s)**: Code explanation is decently structured and visually organized, and generally includes necessary documentation aiding in code understanding, and the code is readable employing proper formatting and mnemonic variable and function names. However, minor improvements could be made.
        - **[3] No Issues**: Code explanation is well-structured and visually organized, includes necessary documentation aiding in code understanding, and the code is readable employing proper formatting and mnemonic variable and function names.

        #### 6. Overall Score
        - **[1] Horrible**: Completely missed the mark. You’d avoid this LLM and warn others against it.
        - **[2] Pretty Bad**: Major issues. You’d likely avoid using this LLM again.
        - **[3] Okay**: Acceptable but unimpressive. You might use this LLM again if it improves.
        - **[4] Pretty Good**: A solid response. You’d likely use this LLM again.
        - **[5] Amazing**: Excellent response. You’d definitely use this LLM again and recommend it to others.
        `,
        placeholders: ['Enter user_prompt', 'Enter model_response']
    },
    {
        name: 'Cypher Project',
        template: `
        ## Context

        You are an evaluator of the output quality of LLM models, based on the information provided including: prompt_input, model response, criteria list. For each evaluation criterion, you need to classify which type the model_response belongs to, briefly but to the point explain why you made that choice.

        ### IMPORTANT NOTE THAT YOU NEED TO FOLLOW:
        - Write this in a way that feels natural, like a regular person expressing their thoughts casually
        - Avoid overly complex or repetitive phrasing. Keep it simple and relatable.
        - Use varied sentence lengths and a conversational tone to make it feel spontaneous and genuine.
        - Use simple words and phrases to make it easy to understand and relatable to a wide audience.
        - Limit 20 words per sentence to keep it concise and engaging.
        
        ### This is my prompt_input:
        \`{input1}\`

        ### This is the model response:
        \`{input2}\`

        ### This is criteria list:

        #### 1. Instruction Following
        - **[1] Major Issue(s)**: The response ignores, circumvents, or violates key components of the prompt, rendering the response unhelpful to the user. The response punts unnecessarily on a non-safety related issue.
        - **[2] Minor Issue(s)**: Response follows most of the instructions from the prompt, satisfying the user’s primary intent, but misses certain elements.
        - **[3] No Issues**:Response completely follows all instructions from the prompt, fully respecting the user’s prompt.

        #### 2. Writing Quality
        - **[1] Major Issue(s)**: 
            Grammar - Contains significant spelling or grammar mistakes (3+).
            Fluency - The writing is clearly non-fluent and sounds like a non-native language speaker.
            Tone - Completely misaligned with the prompt’s register and tone; unnatural or not conversational.
            Structure - Tables are not present where applicable.
            Visual Presentation - There is no visual separation between ideas; distinct ideas are lumped together in one paragraph.
            Text Formatting - Lists are not broken into bullet points, more than one space between words.
        - **[2] Minor Issue(s)**: 
            Grammar - Contains some spelling or grammar mistakes (<2).
            Fluency - The writing is mostly fluent, but contains minor instances of non-native language.
            Tone - May be misaligned with the prompt’s register and tone; may be unnatural or not conversational.
            Structure - Tables might not be used where necessary.
            Visual Presentation - The ideas covered in the response are visually separated into distinct text space.
            Text Formatting - Lists are used when appropriate, including bolding where relevant. Key details may not be bolded.
            Pleasantries - Text contains unnecessary pleasantries like "As an AI assistant" or "Certainly!".
        - **[3] No Issues**: 
            Grammar - Contains no grammar mistakes.
            Fluency - The writing is perfectly fluent in the eyes of a native language speaker.
            Preachiness - Response is NOT preachy, judgemental, or assume bad intent.
            Tone - Response is aligned with the prompt’s register and tone; response is natural and conversational.
            Structure - Tables are used when necessary.
            Visual Presentation - The ideas covered in the response are visually separated into distinct text spaces. Whitespace is used intentionally with added effect.
            Text Formatting - Lists are used when appropriate, including bolding where relevant. Key details are bolded.

        #### 3. Truthfulness
        - **[1] Major Issue(s)**: Primary claims (central to addressing the prompt) contain meaningful inaccuracies or are unfounded, making the response unhelpful to the user.
        - **[2] Minor Issue(s)**: Primary claims are factual and accurate, but secondary claims (which provide additional details) contain inaccuracies or are unfounded.
        - **[3] No Issues**: All claims are factually accurate based on reputable web evidence (e.g., trusted sources like major news outlets or scientific publications).
        `,
        placeholders: ['Enter your response', 'Enter model response']
    },
];

