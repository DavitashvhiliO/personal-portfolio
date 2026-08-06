const fs = require('fs');
let content = fs.readFileSync('src/app/App.tsx', 'utf8');

const targetStr = `{/* METRIC CARDS */}
              <div className="flex flex-col gap-6 mt-10">
                {/* Stat 1 - Experience */}
                <div className="border border-border p-8 bg-card flex flex-col justify-between hover:border-foreground/40 transition-colors">
                  <span className="text-sm font-semibold text-foreground/80 mb-6">
                    {language === "en" ? "Professional Experience" : "წლიანი პროფესიონალური გამოცდილება"}
                  </span>
                  <div className="flex items-baseline mt-auto">
                    <Counter targetValue={4} />
                    <span className="font-bold text-5xl md:text-6xl tracking-tighter text-foregrour targetValue={4} />
                <span className=" font-bold text-5xl md:text-7xl tracking-tighter text-foreground">+</span>
              </div>
            </div>

            {/* Stat 2 - Projects */}
            <div className="border border-border p-8 bg-card flex flex-col justify-between h-48 hover:border-foreground/40 transition-colors">
              <div className="flex flex-col gap-1">
                <span className=" text-[10px] text-muted-foreground">
                  {language === "en" ? "Successful Projects" : "წარმატებული პროექტი"}
                </span>
                <span className="text-[10px] text-muted-foreground  truncate">
                  {language === "en" ? "(Delivered and launched)" : "(დასრულებული & გაშვებული)"}
                </span>
              </div>
              <div className="flex items-baseline">
                <Counter targetValue={15} />
                <span className=" font-bold text-5xl md:text-7xl tracking-tighter text-foreground">+</span>
              </div>
            </div>
          </div>
        </div>`;

const replaceStr = `{/* METRIC CARDS */}
              <div className="flex flex-col gap-6 mt-10">
                {/* Stat 1 - Experience */}
                <div className="border border-border p-8 bg-card flex flex-col justify-between hover:border-foreground/40 transition-colors">
                  <span className="text-sm font-semibold text-foreground/80 mb-6">
                    {language === "en" ? "Professional Experience" : "წლიანი პროფესიონალური გამოცდილება"}
                  </span>
                  <div className="flex items-baseline mt-auto">
                    <Counter targetValue={4} />
                    <span className="font-bold text-5xl md:text-6xl tracking-tighter text-foreground">+</span>
                  </div>
                </div>

                {/* Stat 2 - Projects */}
                <div className="border border-border p-8 bg-card flex flex-col justify-between hover:border-foreground/40 transition-colors">
                  <span className="text-sm font-semibold text-foreground/80 mb-6">
                    {language === "en" ? "Successful Projects" : "წარმატებული პროექტი"}
                  </span>
                  <div className="flex items-baseline mt-auto">
                    <Counter targetValue={15} />
                    <span className="font-bold text-5xl md:text-6xl tracking-tighter text-foreground">+</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 reveal">
              <ExpertiseAccordion list={t.servicesList} />
            </div>
          </div>
        </div>
      </section>`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replaceStr);
  fs.writeFileSync('src/app/App.tsx', content, 'utf8');
  console.log('Fixed file corruption!');
} else {
  console.log('Target string not found, wait, maybe spacing issues? Let me try regex.');
}
