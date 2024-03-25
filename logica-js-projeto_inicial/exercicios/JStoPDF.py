import os
import subprocess
# import markdown2
# from weasyprint import HTML


def convert_js_to_md(js_files, md_file_path):
    # Inicializa o conteúdo do arquivo .md
    md_content = "# Exemplos de Código JavaScript\n\n"
    
    # Ordena os arquivos .js pelo nome antes de processá-los
    js_files.sort()
    
    # Itera sobre todos os arquivos .js
    for js_file_path in js_files:
        # Lê o conteúdo do arquivo .js
        with open(js_file_path, 'r', encoding='utf-8') as js_file:
            js_content = js_file.read()
        
        # Adiciona o conteúdo ao arquivo .md
        md_content += "## " + os.path.basename(js_file_path) + "\n\n```javascript\n" + js_content + "\n``` \n\n"
    
    # Escreve o conteúdo no arquivo .md final
    with open(md_file_path, 'w', encoding='utf-8') as md_file:
        md_file.write(md_content)



# Obtém o diretório do script atual
script_dir = os.path.dirname(os.path.abspath(__file__))

# Lista todos os arquivos .js no diretório
js_files = [os.path.join(script_dir, file_name) for file_name in os.listdir(script_dir) if file_name.endswith('.js')]

# Define o caminho para o arquivo .md final
md_file_path = os.path.join(script_dir, 'ex_logica_js.md')
pdf_file_path = os.path.join(script_dir, 'ex_logica_js.pdf')
css_file_path = os.path.join(script_dir, 'style.css')

# Converte os arquivos .js para um único arquivo .md
convert_js_to_md(js_files, md_file_path)


subprocess.run(['pandoc', '-t', 'html5', '--css', css_file_path, md_file_path, '-o', pdf_file_path])
