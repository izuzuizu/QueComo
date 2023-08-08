<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API EDAMAM</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="estilos.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap" rel="stylesheet">
</head>
<body>       


    <?php
    $ing =[]; 
    $o =0;
    $cantidad=0;
    if (isset($_POST['conCantidad'])) {
        $cantidad = $_POST['cantidad'];
    }
    ?>
    <div class="logo">
        <label>Qué<span>Como</span></label>
    </div>
    <div class="contenedor">
        <div class="forms">
            <form action="" method="post" id="formulario">
                <div class="superior">
                    <div class="label">
                        <label for="cantidad">Ingrese la cantidad de ingredientes</label>
                    </div>
                <input type="number" name="cantidad" id="cantidad" value="<?php echo $cantidad ;?>">
                </div>
                <div class="boton">
                    <input type="submit" value="Siguiente" id="conCantidad" name="conCantidad">
                </div>
            </form> 
                <?php
                if (isset($_POST['conCantidad'])) {
                    $cantidad = $_POST['cantidad'];
                ?> 
            <form action="" method="post" id="formulario2">
            <input type="hidden" name="conCantidad" >
            <input type="hidden" name="busqueda">
            <input type="hidden" name="cantidad" id="cantidad" value="<?php echo $cantidad ;?>">        
        <div class="listaIngredientes">
        <?php        
        for ($i=0; $i < $cantidad ; $i++) {
            $ing[$i] = "";
            if (isset($_POST['busqueda'])) {
                $ing[$i] = $_POST["ingrediente$i"];
            }
        ?>        
            <div class="ingresos">
                <label for="ing<?php echo $i ;?>">Ingrese el ingrediente n° <?php echo ($i+1) ;?></label>
                <input type="text" name="ingrediente<?php echo $i ;?>" id="ing<?php echo $i ;?>" value="<?php echo $ing[$i] ;?>">        
            </div>        
            <?php
                if($i < $cantidad-1){
                    echo'
                        <div class="separador"></div>
                    ';
                }                            
            ?>
        <?php
        }
        ?>
        </div>
        <input type="submit" value="Qué comer" name="busqueda" id="subir">
    </form>
    <?php
    ?>

    <form action="" method="post">
        <input type="hidden" name="conCantidad" >
        <input type="hidden" name="busqueda">
        <input type="hidden" name="cantidad" id="cantidad" value="<?php echo $cantidad ;?>">
        <?php
        for ($i=0; $i < $cantidad ; $i++) {
            if (isset($_POST['busqueda'])) {

            $ing[$i] = $_POST["ingrediente$i"];
            }
        ?>
            <input type="hidden" name="ingrediente<?php echo $i ;?>" id="ing<?php echo $i ;?>" value="<?php echo $ing[$i] ;?>">
        <?php
        }
    }
        ?>
    </form>
    </div>

        <div class="recetas" id="recetas">
        </div>
    </div>
    <script src="foodReco.js"></script>
    <script src="trad.js"></script>
    <script src="trad2.js"></script>
    <script src="Script.js"></script>
</body>
</html>
