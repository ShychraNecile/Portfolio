using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Galgje
{

    class Program
    {
        private static string Intro() {
            Console.WriteLine("Welkom bij galgje!");
            Console.WriteLine("Raad een woord");
            return Console.ReadLine();
        }
        static void Main(string[] args)
        {
            string raadWoord = Intro();
            Console.Clear();
            Beul beul = new Beul(raadWoord);
            beul.PrintPuntjes();
            string resultaat = "onbepaald";
            while (resultaat == "onbepaald") {
                string letter;
                do
                {
                    letter = Console.ReadLine();
                } while (letter.Length != 1);
                resultaat = beul.VerwerkLetter(letter);                            
            }
            Console.WriteLine("Speler 2 heeft {0}", resultaat);
            Console.ReadLine();            
        }

    }
}
