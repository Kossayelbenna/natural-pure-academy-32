import os
import re
from deep_translator import GoogleTranslator

translator = GoogleTranslator(source='fr', target='en')

def translate_match(match):
    french_text = match.group(1)
    
    # Skip short technical strings or empty
    if len(french_text) < 3 or french_text.isascii() and not any(c.isspace() for c in french_text):
        return match.group(0)
        
    try:
        # Avoid translating obvious English or code keys
        if "energy" in french_text.lower() or "sleep" in french_text.lower() or "stress" in french_text.lower():
            if not any(c in french_text for c in "éèêëàâùûîïôœæçÉÈÊËÀÂÙÛÎÏÔŒÆÇ"):
               return match.group(0)
               
        translated = translator.translate(french_text)
        if not translated:
            return match.group(0)
            
        print(f"Translating: '{french_text}' -> '{translated}'")
        return f'"{translated}"'
    except Exception as e:
        print(f"Failed to translate: {french_text} - {e}")
        return match.group(0)

# Pattern to find double-quoted strings
string_pattern = re.compile(r'"([^"\\]*(?:\\.[^"\\]*)*)"')

files_to_translate = [
    'src/data/supplementCatalog.ts',
    'src/data/scientificTerms.ts',
    'src/data/recommendationMappings.ts'
]

for filepath in files_to_translate:
    if not os.path.exists(filepath):
        continue
        
    print(f"\nProcessing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    original = content
    
    # Process line by line to only translate right side of assignments or array elements
    # We'll use a safer regex approach: look for strings containing spaces or french chars
    
    def process_content(text):
        def repl(m):
            val = m.group(1)
            # Conditions for translation: contains French chars OR contains spaces and is relatively long
            has_french_chars = bool(re.search(r'[éèêëàâùûîïôœæçÉÈÊËÀÂÙÛÎÏÔŒÆÇ]', val))
            is_sentence = len(val) > 10 and ' ' in val
            
            if has_french_chars or is_sentence:
                # Don't translate properties like flexitarien if used as enum, but here we translate values
                # We'll translate it carefully
                try:
                    eng = translator.translate(val)
                    if eng:
                        return f'"{eng}"'
                except:
                    pass
            return m.group(0)
            
        return string_pattern.sub(repl, text)
        
    new_content = process_content(content)
    
    if new_content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"No changes made to {filepath}")
