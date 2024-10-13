using System;

namespace Variable
{
    internal class Program
    {
        static void Main()
        {
            string[] str = Console.ReadLine().Split(' ');
            Console.Write(int.Parse(str[0]) + int.Parse(str[1]));
        }
    }
}