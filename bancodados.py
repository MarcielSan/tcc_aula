import mysql.connector

def conectar():
    return mysql.connector.connect(
        host="mysql.railway.internal",
        user="root",
        password="TlXHOTYVdVMOrXJfbChSSdNsghXOYVuZ",
        database="railway",
        port=22210  # ex: 3306
    )

    if conexao.is_connected():
        print("Conectado ao MySQL!")

        cursor = conexao.cursor()

        # Criando tabela
        tabela_usuarios = """
        CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) NOT NULL UNIQUE,
            senha VARCHAR(255) NOT NULL
        );
        """

        cursor.execute(tabela_usuarios)
        print("Tabela 'usuarios' criada com sucesso!")

    except Error as e:
        print("Erro ao conectar ao MySQL:", e)

    finally:
        if 'conexao' in locals() and conexao.is_connected():
        cursor.close()
        conexao.close()
        print("Conexão encerrada.")