import os
import markdown2
from weasyprint import HTML


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


def convert_md_to_html(md_file_path):
    with open(md_file_path, 'r', encoding='utf-8') as md_file:
        md_content = md_file.read()
    html_content = markdown2.markdown(md_content)
    return html_content


def convert_html_to_pdf(html_content, pdf_file_path, css_file_path):
    HTML(string=html_content, base_url=os.path.dirname(css_file_path)).write_pdf(pdf_file_path, stylesheets=[css_file_path])


def md_to_pdf(md_file_path, pdf_file_path, css_file_path):
    html_content = convert_md_to_html(md_file_path)
    convert_html_to_pdf(html_content, pdf_file_path, css_file_path)



# Obtém o diretório do script atual
script_dir = os.path.dirname(os.path.abspath(__file__))

# Lista todos os arquivos .js no diretório
js_files = [os.path.join(script_dir, file_name) for file_name in os.listdir(script_dir) if file_name.endswith('.js')]

# Define o caminho para o arquivo .md final
md_file_path = os.path.join(script_dir, 'ex_logica_js.md')

# Converte os arquivos .js para um único arquivo .md
convert_js_to_md(js_files, md_file_path)

md_file_path = os.path.join(script_dir, 'ex_logica_js.md')
pdf_file_path = os.path.join(script_dir, 'ex_logica_js.pdf')
css_file_path = os.path.join(script_dir, 'style.css')

md_to_pdf(md_file_path, pdf_file_path, css_file_path)
