public class Aluno {
    private String name;
    static int contador;
    int codigo;

    Aluno(){    
        codigo++;   
    }

    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name=name;
    }
}