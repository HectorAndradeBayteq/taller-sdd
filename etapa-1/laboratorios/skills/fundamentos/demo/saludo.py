def saludar(nombre):
    if not nombre:
        nombre = "mundo"
    return f"Hola, {nombre}!"


if __name__ == "__main__":
    print(saludar("mundo"))
