// const ASSET_SOURCE = "/assets/posts/matrix-calculation/";

export default function matrix_calculation() {
  return (
    <section>
      <p>Documented on November 28th, 2025</p>
      <p>A C++ project able to perform linear algebra computations including solving system of linear equations, compute nullspace, find determinant. Where everything is connected to a CLI interface</p>
      <ul>
        <li><a href="https://github.com/2192375d/matrix_calculation">github link</a></li>
      </ul>

      <h3>purpose</h3>
      <p>(This part is unnecessarily long so skip it unless that's what you are here for)</p>
      <p>This is a project I started during highschool. I was very bored of highschool math (as it was meant to be), and some video from a YouTube channels (called "Struggling Grad Student" I believe?) metioned the concept of linear algebra and the legendary textbook <a href="https://linear.axler.net/">Linear Algebra Done Right</a>.</p>
      <p>I started reading that book.</p>
      <p>I think by a certain point, I just wasn't able to proceed in reading it, because I didn't even know what the book meant when it tells me to "prove" something. My lack of mathematical maturity back then led me unable to do like 80% of the practice problems, and I could not understand (at all) the solutions online</p>
      <p>That's when I realized maybe I should just do some applications out of the concepts instead, as I didn't want to just stop there.</p>
      <p>Another reason is that I was kind of looking for working on something tied to object oriented programming? Yeah, I think back then I felt like I can do something like SquareMatrix is a derived class from Matrix, so might as well just make this project</p>
      <p>So yeah, that's why this project exists?</p>

      <h3>Stage 1 (what I did during highschool)</h3>
      <p>Very basic stuffs, I had class matrix, with only one property, that is a 2D vector, and a tons of methods. I couldn't really understand why people use encapsulation back then so I just left everything public</p>
      <p>My .hpp file sorta looks liked this I believe?</p>
      <pre>
        <code>
          {`
#include <vector.h>
using namespace std;
          
class Matrix {
public:
    std::vector<std::vector<double>> v;


    friend std::ostream &operator<<(std::ostream &out, const Matrix &m);
    friend std::istream &operator>>(std::istream &in, Matrix &m);

    Matrix();
    Matrix(std::vector<std::vector<double>> v);
    Matrix(const Matrix &right);

    Matrix operator+(const Matrix &right) const;
    Matrix operator-(const Matrix &right) const;
    Matrix operator*(const Matrix &right) const;
    bool operator==(const Matrix &right) const;
    friend Matrix operator*(const double &left, const Matrix &right);
};
          `
          }
        </code>
      </pre>
      <p>
        I applied a lot stuffs I just learned from highschool CS course, that is the operator overloading, constructor and default/copy constructor.
      </p>
      <p>
        I also made the SquareMatrix an inherited class from it with a few more methods like getDerminant.
      </p>
      <p>Oh yeah, speak of determinant, my determinant method back then has a time complexity of O(n!)</p>
      <pre>
        <code>
          {`
get_determinant_cofactor_expansion(std::vector<std::vector<double>> matrix) {

    if (matrix.size() == 1) {
        return matrix[0][0];
    }

    else {
        bool first = true;
        double sum = 0;

        for (int i = 0; i < matrix.size(); i++, first = !first) {
            if (std::abs(matrix[0][i]) < MACHINE_EPS) {
                continue;
            }

            std::vector<std::vector<double>> v = matrix;
            v.erase(v.begin());

            for (int j = 0; j < v.size(); j++) {
                v[j].erase(v[j].begin() + i);
            }

            first == true
                ? sum += matrix[0][i] * get_determinant_cofactor_expansion(v)
                : sum -= matrix[0][i] * get_determinant_cofactor_expansion(v);
        }

        return sum;
    }
}
          `
          }
        </code>
      </pre>
      <p>I still kept it today, although I definitely will never use it</p>
      <p>Yeah that code method implementation, no matter the way how I coded it or the unnecessarily high time complexity; but back then, I felt great for it. I was actually super proud of myself for making this, as this was like the hardest algorithm I ever wrote.</p>
      <p>Aside from that I think I was handling all the error case by just returning NULL (I didn't even know what it does lol), instead of throwing exceptions.</p>
      <p>But nonetheless there's still some nice coding principles I followed, I was surprised that I actually took my time to write all the documentations for each methods.</p>
      <p>(documentation for the + operator)</p>
      <pre>
        <code>
          {`

/*
 * The method will return a matrix which is the
 * sum of the two given matrices.
 *
 * If the two given matrices have different sizes,
 * the method will leave a message indicating the
 * input is invalid and returns a 1 by 1 matrix with
 * NULL as it's only value.
 *
 * If the two given matrices have the same size,
 * the method will return the sum of them.
 */
Matrix Matrix::operator+(const Matrix &right) const {
          `
          }
        </code>
      </pre>
      I also made a method that calculates rank, cofactor, minor all that, but they don't really serve for any purpose, and were implemented in non polynomial time complexity for no reason.
      <p>Those little efforts meant to make my project look nicer were funny, but at least I was having fun.</p>
      <p>Luckily, I decided to keep it on Github (just in case it'll be useful sometime in the future), and I'll never regret for doing this.</p>
      <h3>Stage 2 (the second try)</h3>
      <p>Ever since I took linear algebra 1, there's multiple times when I just wanna restart working on this project</p>
      <p>I attempted to restart working on this-with two friends-and turn it as a web program, but I ended up wasting their time because of my lack determination, understandings about java, and my terrible time management (and me wasting time playing badminton).</p>
      <p>Later on I attempted to restart again and gave up cause coding the basic code structure is just too boring.</p>
      <p>Until two months ago (early October 2025?), I decided to proceed.</p>
      <p>The main motivation is that I see two courses have applications tied to this project, where the two courses are <a href="https://utsc.calendar.utoronto.ca/course/matb24h3">linear algebra 2</a> and <a href="https://utsc.calendar.utoronto.ca/course/cscc37h3">introduction to numerical algorithms for computational mathematics</a>.</p>
      <p>Unlike previous attempts, I decided to straight up use my highschool codes, with the my first goal of implementing <a href="https://en.wikipedia.org/wiki/Gaussian_elimination">Gaussian Elimination</a></p>
      <p>I started by making my codes better. Removed all the "using namespace ...", made use of exception to handle error, changed most of the int to size_t, and added encapsulation</p>
      <h3>Stage 3 (handle datatype)</h3>
      <p>Welp, adding encapsulation just means, I have to add a set_[something], get_[something] method for everything on earth.</p>
      <p>I wrote the basic ones like get_data() that literally just returns a 2D vector representing the matrix, get_entry() which does obvious things; while adding more getter/setter methods whenever I find necessary. Every method conforms to the following datatype invariant (fancy term I learned from a really nice prof)</p>
      <ul>
        <li>Matrix: 2D vector v is always rectangular</li>
        <li>SquareMatrix (extends Matrix): 2D vector v is always rectangular and square</li>
        <li>TriangularMatrix (extends Matrix): 2D vector v is always rectangular and either upper or lower triangular</li>
        <li>Vector (extends Matrix): 2D vector v is always rectangular and have one column only</li>
      </ul>
      <p>I came to the realization that if I keep the constructor throwing an exception whenever necessary, this invariant will practically never break</p>
    </section>
  )
}
